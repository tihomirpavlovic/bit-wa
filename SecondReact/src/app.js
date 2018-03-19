
const BlogItem = (props) => {
    return (
        <div>
            <h2>{props.title}</h2>
            <p>{props.body}</p>
        </div>
    )
}

const BlogList = (props) => {
    return (
        <p>{postsData.map(element => {
           return <BlogItem title={element.title} body={element.body} />
        })}</p>
    )
}

const Header = (props)=>{
    return (
        <div>
            {props.headerTitle}
        </div>
    );
}

const App = (props) => {
    return (
        <div>
            <Header headerTitle={"MyBlog"}/>
            <BlogList />
        </div>
    )
}

const root = document.getElementById("root");


ReactDOM.render(<App />, root)