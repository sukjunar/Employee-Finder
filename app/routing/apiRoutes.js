let employees = require('../data/employees.js');

module.exports = function (app) {
  /**
   * GET the tablelist 
   */
  app.get('/api/employees', function (req, res) {
    res.json(employees);
  });

  /**
   * If there are fewer than 5 reservations, add the new reservation to the tablelist
   * Otherwise add the new reservation to the waitlist
   */
  app.post('/api/employees', function (req, res) {
    if (employees.length < 5) {
      employees.push(req.body); 
    } else {
      employees.push(req.body);
    }

    res.end();
  });

}
