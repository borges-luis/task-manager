import { Categoria } from '@prisma/client';
import { CategoriaReposity } from '../repositories/CategoriaRepository';

export class CategoriaService {
    private repository: CategoriaReposity;

    constructor() {
        this.repository = new CategoriaReposity();
    }

    async FindAll(): Promise<Categoria[]> {
        return this.repository.FindAll();
    }

    async Insert(categoria: Categoria): Promise<void> {
        return this.repository.Insert(categoria);
    }
};
