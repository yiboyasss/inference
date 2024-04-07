const styles = {
  container: {
    display: 'block',
    position: 'relative',
    width: '300px',
    height: '300px',
    border: '1px solid #ddd',
    borderRadius: '20px',
  },
  containerSelected: {
    display: 'block',
    position: 'relative',
    width: '300px',
    height: '300px',
    border: '1px solid #ddd',
    borderRadius: '20px',
    boxShadow: '0 0 10px #ccc',
  },
  descriptionCard: {
    position: 'relative',
    top: '-1px',
    left: '-1px',
    width: '300px',
    height: '300px',
    border: '1px solid #ddd',
    padding: '20px',
    borderRadius: '20px',
  },
  drawerCard: {
    position: 'relative',
    padding: '20px 80px 0',
    minHeight: '100%',
    width: '60vw'
  },
  p: {
    fontSize: '14px',
    padding: '0px 10px',
  },
  formContainer: {
    height: '80%',
    overflow: 'scroll',
    padding: '0 10px'
  },
  buttonsContainer: {
    position: 'absolute',
    bottom: '50px',
    left: '100px',
    right: '100px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buttonContainer: {
    width: '45%',
    borderWidth: '0px',
    backgroundColor: 'transparent',
  },
  buttonItem: {
    width: '100%',
    padding: '5px',
    borderRadius: '4px',
    border: '1px solid #e5e7eb',
    borderWidth: '1px',
    borderColor: '#e5e7eb',
  },
  instructionText: {
    fontSize: '12px',
    color: '#666666',
    fontStyle: 'italic',
    margin: '30px 0',
    textAlign: 'center',
  },
  iconRow: {
    position: 'absolute',
    bottom: '20px',
    left: '20px',
    right: '20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  iconItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '20px',
  },
  boldIconText: {
    fontWeight: 'bold',
    fontSize: '1.2em',
  },
  muiIcon: {
    fontSize: '1.5em',
  },
  smallText: {
    fontSize: '0.8em',
  },
}

export default styles