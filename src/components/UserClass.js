import React from "react";
import { GITHUB_URL, LINKEDIN_URL } from "../utilities/constants";
import { AVATAR_URL } from "../utilities/constants";

class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            count : 0,
            userInfo : {
                name : "UserName",
                location : "Choose your Location here",
            },
        };
        console.log(this.props.name +"child constructor called");
    };
    
    async componentDidMount(){
        console.log(this.props.name + "child component did mount called");
        const data = await fetch(GITHUB_URL);
        const json = await data.json();
        console.log(json);

        this.setState({
            userInfo : json,
        });

        this.timer = setInterval( () => {
            //console.log("Set interval ");
        },1000);
    };

    componentDidUpdate(prevProps, prevState){
        console.log("component did update");
        if(this.state.count !== prevState.count ){
            console.log(this.state.count);
        }
    };
    componentWillUnmount(){
        clearInterval(this.timer);
        console.log("component will unmount");
    };
    render(){
        const {name, location} = this?.state?.userInfo;
        console.log(name +"child render called");
        return (
            <div className="user_card">
                <button onClick={
                () =>{
                    this.setState(
                        {
                            count : this.state.count +1,
                        }
                    );
                }}>Increment count</button>
                <div className="flex justify-evenly">
                    <div className="p-2 m-2 w-4/12">
                        <img src={AVATAR_URL} />
                    </div>
                    <div className="p-2 m-2 w-4/12 font-bold">
                    <ul>
                        <li>Name: {name}</li>
                        <li>Location: {location}</li>
                        <li>Contact me at : ashwithapadidham17@gmail.com</li>
                    </ul>
                    </div>
                </div>
            </div>
        );
    };
};

export default UserClass;