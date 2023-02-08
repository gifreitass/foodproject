const removeDuplicatesByNome = (array: Record<string, any>[]) : any[] => {
    return array.reduce((acc: Record<string, any>[], item) => {
        if (acc.findIndex((_item) => _item.nome === item.nome) === -1){
            acc.push(item)
        }
        return acc;
    }, []);
};

export default removeDuplicatesByNome