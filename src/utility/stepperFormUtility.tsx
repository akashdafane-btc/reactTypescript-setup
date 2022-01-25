
export const Components = () => (
  <>
  <h1>Hello</h1>
  </>
)
const Tntra = () => (
  <>
  <h1>Tntra</h1>
  </>
)

const Demo = () => (
  <>
  <h1>Botree</h1>
  </>
)

// export const titles = [
//   'Basic information', 
//   'Contact Information', 
//   'Personal Information', 
//   'Payment'];


export const getSetpContent = (step:any) => {
  switch(step){
    case 0:
      return(
        <Components />
      )
    case 1:
      return(
        <Tntra />
      )
      case 2:
      return(
        <Demo />
      )
      case 3:
      return(
        <Demo />
      )
    default:
      return 'unknown step';
  }
}


