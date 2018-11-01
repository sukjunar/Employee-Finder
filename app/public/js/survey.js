$(function () {
    const pullData = function (event) {
        event.preventDefault();

        user = {
            name: $('#name').val(),
            photo: $('#url').val(),
            scores: [
                $('#q01').val(),
                $('#q02').val(),
                $('#q03').val(),
                $('#q04').val(),
                $('#q05').val(),
                $('#q06').val(),
                $('#q07').val(),
                $('#q08').val(),
                $('#q09').val(),
                $('#q10').val(),
            ]
        };

        console.log(user);

        $.ajax({
            method: 'POST',
            url: 'api/employees',
            data: user,
            success: function () {
                console.log("yes")
            }
        })
    };

    $('#submit').on('click', pullData)
});
