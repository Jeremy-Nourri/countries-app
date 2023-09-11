export default function DropdownElement({ Parent, li }: { Parent: string, li: React.ReactNode[] }) {
  return (
    <div className="flex-none">
      <ul className="menu menu-horizontal px-1">
        <li>
          <details>
            <summary>
              {Parent}
            </summary>
            <ul className="p-2 bg-base-100">
              {li}
            </ul>
          </details>
        </li>
      </ul>
    </div>
  )
}


