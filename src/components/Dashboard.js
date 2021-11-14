import { connect } from 'react-redux'

const Dashboard = props => {
    console.log(props)

  return (
  
    <div className="App-Main">
    
      <div className="dashboard">
        <h2 className="my_palettes">My Palettes</h2>
  
        <p className="my_info"> View My Profile </p>
  
    </div>
    </div>
  )

}

const mapStateToProps = state => {
  return {
    userPalettes: state.userPalettes
    
  }
}

export default connect(mapStateToProps)(Dashboard)

