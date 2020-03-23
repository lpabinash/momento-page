import React, { Component } from 'react'
import classes from './Todo.module.css'

export class Todo extends Component {
    CInput = React.createRef();

    state={
        todoList: JSON.parse(localStorage.getItem("TODO")),
        display: 'none',
        disp:'none',
        count:1
    }
  
    

    onFormClick = (e) => {
        e.preventDefault();
        console.log("clicked - " + e.target.todoItem.value);
        if ( this.CInput.current.value !== '') {

            let Storage = this.state.todoList;
    
            const newCategory = this.CInput.current.value;
            Storage.push(newCategory);
    
            localStorage.setItem('TODO', JSON.stringify(Storage));
            this.setState({todoList: Storage});
            this.CInput.current.value = '';
            // this.closePopUp();

        } else alert ('Enter category name you want to add');
    }
    removeCategory = (pos,e) => {
        
        e.preventDefault();

        const mArr = this.state.todoList;
        // let Storage = JSON.parse(localStorage[('TODO')]);

        mArr.splice(pos, 1);

        // Storage = mArr;
        localStorage.setItem('TODO', JSON.stringify(mArr));
        this.setState({todoList: mArr});

    }
    showpop=()=>{
        
        this.setState({count:this.state.count+1})
        if(this.state.count%2==1){
            if(this.state.todoList.length==0){
                this.setState({disp:'block'})
            }else
            {
                this.setState({display:'block'})
            }
        }else{
            this.setState({display:'none'})
            this.setState({disp:'none'})
        }
        
    }

    show=()=>{
        this.setState({display:'block'})
        this.setState({disp:'none'})
    }


    render() {
        let stateData = this.state.todoList;
        {
            if(stateData === null || stateData === undefined){
                stateData = [];
                this.setState({todoList:stateData});
            }
        }
        
        const renderingData = stateData.map((item,pos) => {
            return (
                <tr className={classes.tr} key={pos+1}>
                    <input className={classes.check} type='checkbox'/>
                    <td >{item}</td>
                    <td >
                        <a onClick={(e)=>this.removeCategory(pos,e)} href="/" >
                            <i className="far fa-trash-alt"></i>
                        </a>
                    </td>
              </tr>
            )
        });
        return (
            <div>
                <h1 className={classes.todo} onClick={this.showpop}>TODOs</h1>
                <div className={classes.todoWrapper} style={{display:this.state.display}}>
                <table>
                    <tbody>
                {renderingData}
                </tbody>
                </table>
                <form onSubmit={this.onFormClick}>
                <input className={classes.inputField3} type="text" ref={this.CInput} name="todoItem"></input>
                </form>
                </div>
                <div className={classes.Wrapper} style={{display:this.state.disp}}>
                    <button className={classes.btn} onClick={this.show}>Add new Todo</button>
                </div>
            </div>
        )
    }
}

export default Todo
