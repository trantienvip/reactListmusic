const ShowList2 = ({data, removed}) => {
    return(
        data.map(data => {
            return (
                <tr key={data.id}>
                    <th scope="row">{data.id}</th>
                    <td>{data.title}</td>
                    <td><img width={200} src={'https://i.ytimg.com/vi/'+data.preview_youtube_id+'/hqdefault.jpg'}/></td>
                    <td><iframe width="200" height="150" src={"https://www.youtube.com/embed/"+data.preview_youtube_id} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></td>
                    {/* <td><button onClick={() => removed(data.id)} type="button" className="btn btn-danger">Xóa</button></td> */}
                </tr>
            )
        })
    )
}

export default ShowList2;