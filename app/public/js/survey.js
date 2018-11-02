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

        $.post('/api/employees', user).then(function (res) {
            $('#matchName').text(`${res.name}`);
            $('#matchURL').attr("src", `${res.photo}`);
        });

    }
    $('#submit').on('click', pullData);
});