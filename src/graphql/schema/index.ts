import { buildSchema } from 'graphql';
import { gQUserSchema } from '../../components/user/user.graphql';

export default buildSchema([gQUserSchema].join());
