import './index.css'

const TodosItems = props => {
  const {todoDetails, len} = props
  const {
    id,
    name,
    project,
    task,
    status,
    startDate,
    endDate,
    edit,
  } = todoDetails
  const lengths = todoDetails.length
  return (
    <li className="table-row">
      <p className="table-header-name sno">{id}</p>
      <hr className="separator" />

      <p className="table-header-name name">{name}</p>
      <hr className="separator" />
      <p className="table-header-name project">{project}</p>
      <hr className="separator" />
      <p className="table-header-name task">{task}</p>
      <hr className="separator" />
      <p className="table-header-name status">status</p>
      <hr className="separator" />
      <p className="table-header-name endDate">{startDate}</p>
      <hr className="separator" />
      <p className="table-header-name endDate">{endDate}</p>
      <hr className="separator" />
      <p className="table-header-name">edit/delete</p>
    </li>
  )
}

export default TodosItems
