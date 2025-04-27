import React from "react";
import ProfileCard from "./child"; 
function Parent() {
  return (
    <div style={styles.container}>
      <ProfileCard
        name="Alice Johnson"
        age={25}
        bio="Frontend Developer who loves React."
        image="https://randomuser.me/api/portraits/women/68.jpg"
      />
      <ProfileCard
        name="Bob Smith"
        age={30}
        bio="Backend Engineer and Node.js enthusiast."
        image="https://randomuser.me/api/portraits/men/32.jpg"
      />
      <ProfileCard
        name="Charlie Brown"
        age={28}
        bio="Full-stack Developer passionate about UI/UX."
        image="https://randomuser.me/api/portraits/men/41.jpg"
      />
      <ProfileCard
        name="Diana Prince"
        age={27}
        bio="Mobile App Developer and tech blogger."
        image="https://randomuser.me/api/portraits/women/44.jpg"
      />
   
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    marginTop: "20px",
    justifyContent: "space-around",
  }
};

export default Parent;