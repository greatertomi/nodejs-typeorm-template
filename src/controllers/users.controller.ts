import { Request, Response } from 'express';

import { UserEntity } from '../entities/UserEntity';
import handleGetRepository from '../utils/handleGetRepository';

export const getUsers = async (req: Request, res: Response) => {
  try {
    const userRepository = handleGetRepository(UserEntity);
    const users = await userRepository.find();
    return res.status(200).send(users);
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};

export const createUser = async (req: Request, res: Response) => {
  const { firstName, lastName, age, email, password, role, country } = req.body;
  try {
    const userRepository = handleGetRepository(UserEntity);
    const user = userRepository.create({
      firstName,
      lastName,
      age,
      email,
      password,
      role,
      country
    });
    const results = await userRepository.save(user);

    return res.status(201).send({
      message: 'User created',
      data: {
        userId: results.userId,
        email: results.email,
        fullName: `${results.firstName} ${results.lastName}`
      }
    });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
};
