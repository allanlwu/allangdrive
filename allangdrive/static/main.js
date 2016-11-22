// define(['jquery', 'base/js/utils'], function ($, utils) {
//     function createDisplayDiv() {
//         $('#maintoolbar-container').append(
//             $('<div>').attr('id', 'allangdrive-display')
//                       .addClass('btn-group')
//                       .addClass('pull-right')
//             .append(
//                 $('<strong>').text('Upload to GDrive: ')
//             ).append(
//                 $('<span>').attr('id', 'allangdrive-mem')
//                            .attr('title', 'Manually upload to Google Drive')
//             )
//         );
//     }

define(['base/js/namespace'], function(Jupyter) {
        function createDisplayDiv() {
            var handler = function () {
                alert('this is an alert from my_extension!');
            };
            var action = {
                icon: 'fa-comment-o', // a font-awesome class used on buttons, etc
                help    : 'Show an alert',
                help_index : 'zz',
                handler : handler
            };
            var prefix = 'my_extension';
            var action_name = 'show-alert';
            var full_action_name = Jupyter.actions.register(action, name, prefix); // returns 'my_extension:show-alert'
            Jupyter.toolbar.add_buttons_group([full_action_name]);
        }

        return {
            load_ipython_extension: load_ipython_extension
        };
    });

    // var displayMetrics = function() {
    //   $.getJSON(utils.get_body_data('baseUrl') + 'gdrive', function(data) {
    //       // FIXME: Proper setups for MB and GB. MB should have 0 things
    //       // after the ., but GB should have 2.
    //       var display = str(data['status']);
    //       console.log ("Current text: " + display);
    //       $('#nbgdrive-mem').text(display);
    //   });
    // }

    var load_ipython_extension = function () {
        createDisplayDiv();
        // displayMetrics();
        // Update every five seconds, eh?
        // setInterval(displayMetrics, 1000 * 5);
    };

    return {
        load_ipython_extension: load_ipython_extension,
    };
});
