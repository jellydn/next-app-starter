import { type NextApiRequest, type NextApiResponse } from 'next';
import { withValidation } from 'next-validations';
import { z } from 'zod';

const schema = z.object({
    name: z.string().min(5),
});

const validate = withValidation({
    schema,
    type: 'Zod',
    mode: 'query',
});

const handler = (req: NextApiRequest, res: NextApiResponse) => {
    res.status(200).json(req.query);
};

export default validate(handler);
