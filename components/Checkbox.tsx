interface Props {
    value:boolean
    onChange:any
}

export const Checkbox = (props: Props ) => {

    return (
        <label>
          <input type="checkbox" checked={props.value} onChange={props.onChange} />
        </label>
      );

}


//todo Usage:
/*

? State & Event Handling
const [checked, setChecked] = useState(false);
const handleChange = () => {
    setChecked(!checked);
};

? JSX
<div className={.....}>
    <Checkbox value={checked} onChange={handleChange}/>
</div>


*/