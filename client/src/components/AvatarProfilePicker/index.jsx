import {React} from "react";
import { Form } from "react-bootstrap";
import "./AvatarProfilePicker.scss"
function AvatarProfilePicker({avatarOptions, selectedAvatar, setSelectedAvatar}){

      return (
    <Form.Group className="mb-2">
        <Form.Label>Select an Avatar</Form.Label>
        <div className="d-flex gap-2 flex-wrap justify-content-between ">
            {avatarOptions.map((avatar,i) => (
            <img 
            key ={`avatar-${i}`}
            className={'selectable-avatar'} 
            src={avatar} 
            alt={`Avatar option ${i}`}/>
            ))}
        </div>
    </Form.Group>
    );  
}
export default AvatarProfilePicker