from allangdrive.handlers import setup_handlers
# Jupyter Extension points
def _jupyter_server_extension_paths():
    return [{
        'module': 'allangdrive',
    }]

def _jupyter_nbextension_paths():
    return [{
        "section": "notebook",
        "dest": "allangdrive",
        "src": "static",
        "require": "allangdrivemain"
    }]

def load_jupyter_server_extension(nbapp):
    setup_handlers(nbapp.web_app)
