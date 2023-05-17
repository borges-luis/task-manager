import { Categoria, PrismaClient } from '@prisma/client';
import { Command } from "../shared/Command";


export class CategoriaReposity {

    async FindAll(): Promise<Categoria[]>  {
        return await Command<Promise<Categoria[]>>(async (prisma: PrismaClient) => {
            const categorias = await prisma.categoria.findMany();

            return categorias as Categoria[];
        });
    }

    async Insert(categoria: Categoria): Promise<void> {
        await Command(async (prisma: PrismaClient) => {
            await prisma.categoria.create({
                data: {
                    descricao: categoria.descricao
                }
            });
        })
    }
};
