import express from "express";
const router = express.Router();

router.use((req: any, res: any, next: any) => {
  console.log('Time: ', Date.now());
  next()
})
// define the home page route
router.get('/:name', (req: any, res: any) => {
  res.send('trades');
})

export default router;