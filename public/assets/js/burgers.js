$(function() {
    $('#create-burger').on('submit', function (event) {
        alert('clicked!');
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
        var devouredBurger = $(this).data('devouredburger');

        var hasBeenDevoured = {
            devoured: devouredBurger
        };

        $.ajax('/api/burgers/' + id, {
            type: 'PUT',
            data: hasBeenDevoured
        }).then(
            function() {
                console.log('updated state to', hasBeenDevoured);
                location.reload();
            }
        );
    });



})