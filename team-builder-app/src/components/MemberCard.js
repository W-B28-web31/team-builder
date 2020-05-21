import React from 'react'

function MemberCard(props) {
    // console.log(props)
    return (

        <div>
            {props.teamMembers.map(member => (
                <div key={member.id}>
                    <h2>{member.fname} {member.lname} </h2>
                    <h3>{member.email}</h3>
                    <h4>{member.role}</h4>
                </div>
            ))}
        </div>
    );
};

export default MemberCard
