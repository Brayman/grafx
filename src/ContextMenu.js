function Menu({position, item, close}) {
        
    return <div className='menu' style={{left: position[0], top: position[1]}} >
        <p className='menu-item' onClick={close}>Замениться</p>
        <p className='menu-item'>Изменить количество часов<input defaultValue={item}/></p>
        {/* {contextMenu.another !== 0 ? <p className='menu-item'>Убрать смену</p> :<p className='menu-item'>Добавить смену</p>} */}
    </div>
}
export default Menu;