type ListViewerProps<T> = {
    values: T[],
    itemBuilder: (value: T) => React.ReactNode
}

const ListViewer = <T,>(props: ListViewerProps<T>) => {
  return (
    <div>
        {props.values.map(value => props.itemBuilder(value))}
    </div>
  )
}

export default ListViewer