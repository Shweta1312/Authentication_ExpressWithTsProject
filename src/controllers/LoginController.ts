import { NextFunction, Request, Response } from 'express';
import { get, controller, use, post, bodyValidator } from './decorators';

@controller('/auth')
class LoginController {
  @get('/login')
  getLogin(req: Request, res: Response): void {
    res.send(`
      <form method="POST">
        <div> 
          <label>Email:</label>
          <input name="email" type="email"/><br>
          <label>Password:</label>
          <input name="password" type="password"/>
          <button type="submit" name="submit">Submit</button>
      </form>
    `);
  }

  @post('/login')
  @bodyValidator('email', 'password')
  postLogin(req: Request, res: Response): void {
    const { email, password } = req.body;

    if (email === 'hi@hi.com' && password === 'pass') {
      req.session = { loggedIn: true };
      res.redirect('/');
    } else {
      res.send('Incorrect email or password');
    }
  }

  @get('/logout')
  getLogout(req: Request, res: Response): void {
    req.session = null;
    res.redirect('/');
  }
}
