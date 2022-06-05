import { Response, Request, Router, NextFunction, response } from "express";
import { Role } from "../models/Role";
import { User } from "../models/User";
const router = Router()

// router.get('/', (req: Request, res: Response) => {
//     res.send('soy la ruta get');
// });

// router.post('/', (req: Request, res: Response) => {
//     res.send('soy la ruta psot!');
// });

router.get('/', (req: Request, res: Response, next: NextFunction) => {
    User.findAll({
        include: {
            model: Role,
            required: true,
            attributes: ['name', 'id']
        }
    })
        .then((users) => {
            res.json(users);
        })
        .catch((error) => next(error));
});

router.post('/', (req: Request, res: Response, next: NextFunction) => {
    const user = req.body;
    User.create(user)
        .then((createUser) => {
            res.send(createUser);
        })
        .catch((err) => next(err));
});

router.delete('/:id', async (req: Request, res: Response) => {
    const { id } = req.params
    User.destroy({
        where: { id }
    }).then(() => {
        const users = User.findAll()
        return users
    }).then((response) => res.json(response))
        .catch((err) => res.status(500).send(err))
})

router.put('/:id', async (req: Request, res: Response) => {
    const { id } = req.params;
    const user = req.body
    User.update(user, {
        where: { id }
    }).then(() =>
        res.status(200).send('Usuario actualizado')
    ).catch((error) => res.status(500).json(error))
})

export default router