$(function() {
    $('.create-form').on('submit', function (event) {
        event.preventDefault();

        var newBurger = {
            name: $('#addBurger').val().trim(),
            devoured: $('[name=devoured]:checked').val().trim()
        };

        $.ajax('/api/burgers', {
            type: 'POST', 
            data: newBurger
        }).then(
            function() {
                console.log('new burger created: ' + newBurger)
                location.reload();
            }
        );
    });


    $('.devourIt').on('click', function(event) {
        var id = $(this).data('id');
        var devouredBurger = $(this).data('devouredBurger');

        var hasbeenDevoured = {
            devoured: devouredBurger
        };

        $.ajax('/api/cats/' + id, {
            type: 'PUT',
            data: hasbeenDevoured
        }).then(
            function() {
                console.log('updated state to', hasbeenDevoured);
                location.reload();
            }
        );
    });



})