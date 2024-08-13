export interface iGetProducts {
    restauranteId?: number,
    nome: string,
    url: string,
    valor: number,
    promocao: string,
    valorPromocional: number,
    descricao: string,
    id?: string | number
}

export interface iGetRestaurants {
    url: string,
    nome: string,
    categoria: string,
    avaliacao: number,
    sobre: string,
    id: number | string,
}
