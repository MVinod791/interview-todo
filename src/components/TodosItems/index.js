import {AiFillDelete} from 'react-icons/ai'
import {GrEdit} from 'react-icons/gr'
import './index.css'

const TodosItems = props => {
  const {todoDetails, onDeleteItems} = props
  const {
    id,
    sno,
    name,
    project,
    task,
    activeOptionId,
    startDate,
    endDate,
  } = todoDetails

  const onDelete = () => {
    onDeleteItems(id)
  }

  return (
    <li className="table-row">
      <p className="table-header-name sno">{sno}</p>
      <hr className="separator" />
      <p className="table-header-name name">{name}</p>
      <hr className="separator" />
      <p className="table-header-name project">{project}</p>
      <hr className="separator" />
      <p className="table-header-name task">{task}</p>
      <hr className="separator" />
      <p className="table-header-name status">{activeOptionId}</p>
      <hr className="separator" />
      <p className="table-header-name endDate">{startDate}</p>
      <hr className="separator" />
      <p className="table-header-name endDate">{endDate}</p>
      <hr className="separator" />
      <div className="table-header-name delete-icons">
        <button type="button" className="edit-button">
          <GrEdit />
        </button>
        <button type="button" className="delete-button" onClick={onDelete}>
          <AiFillDelete />
        </button>
      </div>
    </li>
  )
}

export default TodosItems
