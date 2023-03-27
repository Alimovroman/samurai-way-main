import React, {ChangeEvent, FC} from 'react';

type PropsType = {
    status: string
    updateStatus: (status: string) => void
}

class ProfileStatus extends React.Component<PropsType> {
    state = {
        editMode: false,
        statusValue: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.statusValue)
    }
    changeValueStatus = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            statusValue: e.currentTarget.value
        })

    }

    componentDidUpdate(prevProps: Readonly<PropsType>, prevState: Readonly<{}>, snapshot?: any) {
       if(prevProps.status !== this.state.statusValue) {
           this.setState({
               statusValue: prevProps.status
           })
       }

    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode}>{this.props.status || 'No Status'}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input  onBlur={this.deactivateEditMode}
                                onChange={this.changeValueStatus}
                                value={this.state.statusValue}
                                autoFocus={true}/>
                    </div>
                }
            </div>
        );
    }
}

export default ProfileStatus;