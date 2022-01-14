import { Response } from 'express';

export abstract class BaseController {
  public static jsonResponse(
    res: Response,
    code: number,
    message: string
  ): Response {
    return res.status(code).json({ message });
  }

  public ok<T>(res: Response, dto?: T): Response {
    if (!dto) {
      return res.sendStatus(200);
    }
    res.type('application/json');
    return res.status(200).json(dto);
  }

  public fail(res: Response, error: Error | string): Response {
    console.log(error);
    return res.status(500).json({
      message: 'Server error'
    });
  }
}
