export default function DropdownElement() {
  return (
    <div className="flex-none">
      <ul className="menu menu-horizontal px-1">
        <li>
          <details>
            <summary>
              Parent
            </summary>
            <ul className="p-2 bg-base-100">
              <li><a>Link 1</a></li>
              <li><a>Link 2</a></li>
            </ul>
          </details>
        </li>
      </ul>
    </div>
  )
}


