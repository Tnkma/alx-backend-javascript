/*
    * accepts request and response as arguments
    * It returns a 200 status and the message Hello Holberton School!
*/

class AppController {
  static getHomepage(request, response) {
    response.status(200).send('Hello Holberton School!');
  }
}

module.exports = AppController;
export default AppController;
