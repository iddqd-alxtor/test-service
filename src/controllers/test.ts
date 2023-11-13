import { Request, Response } from "express";


export const testController = (req: Request, res: Response) => {
  try {
    res.status(200).json({
      test: 'neponimaju nahuj'
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: "naebnulis"
    })
  }
}
