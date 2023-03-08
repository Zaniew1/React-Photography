
import classes from '../editStyle.module.css'
import {useEffect, useRef, useState, } from 'react';
import { MutableRefObject } from "react";
import { InputRef } from '../../../Types/types';
import { useFirestorage } from '../../../hooks/useFirestorage';
import {PricePropertiesToSendType} from '../../../Types/types';
import { useEditFirestoreDatabase} from '../../../hooks/useEditFirestoreDatabase';
type PortfolioElementType = { name:string, description:string,  id:string, date:number, url:string, orientation:number, pictures:{}[]};
type AddAdminType = {toggle:()=>void, update:(updateCounter:number)=>void, updateCounter:number, elementToEdit:PortfolioElementType }
export const EditPortfolio:React.FC<AddAdminType> = (props): JSX.Element=>{
    const [pictureFiles,setPictureFiles] = useState<string[]>([]);
    const [isPropertiesReady, setIsPropertiesReady ] = useState<boolean>(false);
    const [propertiesToSend, setPropertiesToSend ] = useState<PricePropertiesToSendType>({});
    const [databaseLocation] = useState<string>("Portfolio");
    let idToSend = props.elementToEdit.id;
    let namesRef = useRef() as MutableRefObject<HTMLInputElement>
    let descriptionRef = useRef() as MutableRefObject<HTMLInputElement>
    let orientationRef = useRef() as MutableRefObject<HTMLSelectElement>

    let file1Ref = useRef() as MutableRefObject<HTMLInputElement>
    const fileUploadHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
        if(e.target.files != null){
            let file = e.target?.files[0].name
            setPictureFiles((prevState)=>[...prevState, file])
        }
    }

    useEffect(()=>{
        namesRef.current.value = props.elementToEdit.name;
        descriptionRef.current.value = props.elementToEdit.description;
    },[props.elementToEdit.description, props.elementToEdit.name, ])

    const {pictureURL, succesPictureUpload} = useFirestorage(pictureFiles);
    const editHandler = async (e:React.SyntheticEvent) => {
        e.preventDefault();
        const enteredNamesRef: InputRef = namesRef.current.value.trim();
        const enteredDescriptionRef: InputRef = descriptionRef.current.value.trim()
        const enteredOrientationRef: InputRef = orientationRef.current.value.trim()
        setIsPropertiesReady(true);
        props.elementToEdit.name = enteredNamesRef;
        props.elementToEdit.description = enteredDescriptionRef;
        props.elementToEdit.orientation = Number(enteredOrientationRef);
        pictureURL.length !== 0  ? props.elementToEdit.url = pictureURL[0]: props.elementToEdit.url;
        setPropertiesToSend(props.elementToEdit)
        descriptionRef.current.value = '';
        namesRef.current.value = '';
        props.update(props.updateCounter + 1);
    }
    const {succesfullUpload, error} = useEditFirestoreDatabase(databaseLocation,propertiesToSend, isPropertiesReady ,idToSend );
    console.log(succesfullUpload)
    {succesfullUpload && props.toggle()}
    return(
        <div className={classes.modal__add}>
            {error && <p className={classes.admin__success}>Niestety wystąpił błąd ! </p>}
            <button onClick={props.toggle} className={classes.modal__closure}></button>
            <form className={classes.admin__wrapper} onSubmit={editHandler}>
                <label className={classes.admin__label} htmlFor='names'>Nazwa Portfolio</label>
                <input className={classes.admin__input} ref={namesRef} type="text" id="names"  />
                <label className={classes.admin__label} htmlFor='description'>Opis</label>
                <input className={classes.admin__input} ref={descriptionRef} type="text" id="description"  />
                <label className={classes.admin__label} htmlFor='orientation'>Orientacja Zdjęcia</label>
                <select className={classes.admin__select} ref={orientationRef} name="orientation" id="orientation" >
                    <option value={0} selected>Poziome</option>
                    <option value={1}>Pionowe</option>
                </select>
                <label className={classes.admin__label} htmlFor='file1'>Załącz zdjęcie nr 1</label>
                <input className={classes.admin__input} onChange={fileUploadHandler} ref={file1Ref} style={{border:'none'}} type="file" id="file" accept='image/png, image/jpeg' />
                {succesPictureUpload && <p className={classes.admin__success}> Wszystko gotowe do dodania !</p>}
                <button className={classes.admin__button} type="submit">Zapisz</button>
            </form>
        </div>
    )
}


