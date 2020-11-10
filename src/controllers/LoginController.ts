import { NextFunction, Request, Response } from 'express';
import { get, controller, use } from './decorators';

function logger(req: Request, res: Response, next: NextFunction): void {
  console.log('Ready to use!');

  next();
  return;
}

@controller('/auth')
class LoginController {
  @get('/login')
  @use(logger)
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
}
