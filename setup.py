import setuptools

setuptools.setup(
    name="allangdrive",
    version='0.1.0',
    url="https://github.com/allanlwu/allangdrive",
    author="Allan Wu",
    description="Jupyter extension to allow user to sync files to Google Drive",
    packages=setuptools.find_packages(),
    install_requires=[
        'notebook',
    ],
    package_data={'allangdrive': ['static/*']},
)
