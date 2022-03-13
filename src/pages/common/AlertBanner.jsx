import React from 'react'
import { Alert } from 'react-bootstrap';

export default function AlertBanner({ message, variant}) {
  return (
    <Alert variant={variant || "danger"} style={{backgroundColor: "red"}}>{message || "An unexpected error occured. Please try again"}</Alert>
  );
}
