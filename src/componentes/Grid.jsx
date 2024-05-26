import MyCard from './MyCard'

const Grid =()=>{
    return (
        <div className="container">
            <div className="row row-cols-1 row-cols-md-4 g-2">
                <MyCard img="https://cdn.pixabay.com/photo/2018/05/11/08/11/dog-3389729_1280.jpg"  titulo='Tabo' descripcion="Lleno de energía y listo para jugar." bg="success" textButton="Corgi Gáles"/>
                <MyCard img="https://images.pexels.com/photos/46505/swiss-shepherd-dog-dog-pet-portrait-46505.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" titulo="Copo" descripcion="Es juguetón, amigable y se lleva bien con niños y gatos." bg="primary" textButton="Husky" />
                <MyCard img="https://images.pexels.com/photos/220938/pexels-photo-220938.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" titulo="Cholo" descripcion="Perro de tamaño mediano pero con un gran corazón." bg="danger" textButton="Border Collie"/>
                <MyCard img="https://cdn.pixabay.com/photo/2020/11/24/17/54/dog-5773397_1280.jpg" titulo="Cafu" descripcion="Compañero leal y cariñosa, le encanta que lo acaricien y duerman junto a él." bg="warning" textButton="Pastor Australiano"/>
            </div>

        </div>

    )
}

export default Grid
    