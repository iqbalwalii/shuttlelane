import React, { useRef, useState } from "react";
import { useRouter } from "next/router";
import { Grid } from "@material-ui/core";

import AirportTransferBooking from "../../components/admin/AirportTransferBooking";
import SuccessfullPayments from "../../components/admin/SuccessfullPayments";
import PriorityPassBooking from "../../components/admin/PriorityPassBooking";
import CarBooking from "../../components/admin/CarBooking";
import Overview from "../../components/admin/Overview";
import AdminAside from "../../components/admin/AdminAside";
import User from "../../components/admin/User";
import FleetManagementBooking from "../../components/admin/FleetManagementBooking";

import styles from "../../styles/Dashboard.module.css";

const dashboard = () => {
  const [state, setState] = useState("Overview");
  const onStateChange = (value) => {
    console.log("value", value);
    setState(value);
  };

  // const nameRef = useRef();
  // const emailRef = useRef();
  // const passwordRef = useRef();
  // const router = useRouter();
  // const onSubmitHandler = (e) => {
  // 	e.preventDefault();
  // 	let data = {};
  // 	let response;
  // 	data.name = nameRef.current.value;
  // 	data.email = emailRef.current.value;
  // 	data.password = passwordRef.current.value;

  // 	try {
  // 		fetch('http://shuttlelane.herokuapp.com/api/signup', {
  // 			method: 'POST',
  // 			headers: {
  // 				Accept: 'application/json',
  // 				'Content-Type': 'application/json',
  // 			},
  // 			body: JSON.stringify(data),
  // 		})
  // 			.then((res) => res.json())
  // 			.then((res) => {
  // 				response = res;
  // 				console.log(res);
  // 				router.push('/admin');
  // 			});
  // 	} catch (error) {
  // 		console.log(error);
  // 	}
  // 	console.log('outside', response);
  // };
  // return (
  // 	<>
  // 		{/* <div>Welcome to admin dashboard</div>
  // 		<form
  // 			onSubmit={onSubmitHandler}
  // 			style={{
  // 				display: 'flex',
  // 				justifyContent: 'center',
  // 				width: '70vw',
  // 			}}
  // 		>
  // 			<input
  // 				type='text'
  // 				name='name'
  // 				id='name'
  // 				placeholder='name'
  // 				required
  // 				ref={nameRef}
  // 			/>
  // 			<input
  // 				type='email'
  // 				name='email'
  // 				id='email'
  // 				placeholder='email'
  // 				required
  // 				ref={emailRef}
  // 			/>
  // 			<input
  // 				type='password'
  // 				name='password'
  // 				id='password'
  // 				placeholder='password'
  // 				required
  // 				ref={passwordRef}
  // 			/>
  // 			<input type='submit' value='submit' />
  // 		</form> */}
  // 	</>
  // );
  return (
    <Grid
      container
      justifyContent="center"
      align-items="flex-start"
      className={styles.container}
    >
      <Grid item sm={2}>
        <AdminAside onStateChange={onStateChange} />
      </Grid>
      <Grid item container justifyContent="space-evenly" sm={10}>
        {state == "Overview" ? (
          <Overview />
        ) : state.includes("Car") ? (
          <CarBooking />
        ) : state.includes("Airport") ? (
          <AirportTransferBooking />
        ) : state.includes("Priority") ? (
          <PriorityPassBooking />
        ) : state.includes("User") ? (
          <User />
        ) : state.includes("Fleet") ? (
          <FleetManagementBooking />
        ) : (
          <div>Loading..!</div>
        )}
      </Grid>
    </Grid>
  );
};

export default dashboard;
