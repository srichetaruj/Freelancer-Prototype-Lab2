import React,{Component} from 'react';

class SkillItem extends Component {

  constructor(props){
    super(props);
    this.state={
      skillsAdded : '',
      skillRemoved :'',
       is_checked: false

    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event){
   this.setState({is_checked: this.props.allSelectedSkills.indexOf(this.props.id.toUpperCase())>=0 ? false : true},function(){
    let name = this.refs.complete.id;
    var skillAdded = this.state.skillsAdded;
    var skillRemoved = this.state.skillRemoved;
    if(this.state.is_checked){
      skillAdded=this.refs.complete.id;
      this.setState({
        skillsAdded: skillAdded
      },function(){
        this.props.addSkills(this.state.skillsAdded);
      })
    }else{
      skillRemoved = this.refs.complete.id;
      this.setState({
        skillRemoved: skillRemoved
      },function(){
        this.props.removeSkills(this.state.skillRemoved);
      })
    }
});
  }

  render(){
      return(
        <div className = "panel-body-item " >
          <label class="container" >{this.props.skill }
            <input type="checkbox" className = "checkbox-skillitem" id = {this.props.id} ref ="complete" onClick = {this.handleChange}  checked={this.props.allSelectedSkills.indexOf(this.props.id.toUpperCase())>=0 ? true :false} />
            {this.props.allSelectedSkills.indexOf(this.props.id.toUpperCase())>=0 ? <span class="checkmark"></span> : <span class="checkmark1"></span>}

          </label>
        </div>
      );

    }
}

export default SkillItem;
