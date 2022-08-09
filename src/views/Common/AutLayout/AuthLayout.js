import * as React from "react"
import { Row, Col } from "reactstrap"
import "../../../@core/scss/base/pages/authentication.scss"

const AuthLayout = (props) => {
  const { children } = props

  return (
    <div className="auth-wrapper auth-v1 px-2">
      <Row className="auth-inner py-2">
        <Col className="mb-0 card">
          <div className="card-body">{children}</div>
        </Col>
      </Row>
    </div>
  )
}

export default AuthLayout
