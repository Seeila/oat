import React, { Component } from "react";
import PropTypes from "prop-types";

class UserProfile extends Component {
   constructor(props) {
      super(props);
      this.state = {
         user: []
      };
   }

   componentDidMount() {
      const userId = this.props.match.params.userId;
      this.props.getTaker(userId).then(res => {
         this.setState({ user: res });
      });
   }

   //stackoverflow solution for avoiding infinite update loop
   componentDidUpdate = previousProps => {
      const currentId = this.props.match.params.userId;
      const previousId = previousProps.match.params.userId;
      if (currentId !== previousId) {
         this.props.getTaker(currentId).then(res => {
            this.setState({ user: res });
         });
      }
   };

   render() {
      const { user } = this.state;
      if (!user.lastName) {
         return <p>Loading</p>;
      }
      return (
         <section
            className={
               user.gender === "male" ? "user-profile" : "user-profile pink"
            }
            data-letter={user.lastName.charAt(0)}
         >
            <img src={user.picture} alt="" />
            <section className="user-info">
               <h3>
                  {user.firstName} {user.lastName}
               </h3>
               <h4>Mail:</h4>
               <p>{user.email}</p>
               <h4>Address:</h4>
               <p>{user.address}</p>
               <h4>Login:</h4>
               <p>{user.login}</p>
            </section>
         </section>
      );
   }
}

UserProfile.propTypes = {
   getTaker: PropTypes.func.isRequired
};

export default UserProfile;
