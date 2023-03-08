import classes from '../addStyle.module.css'
import {useRef, useState, } from 'react';
import { MutableRefObject } from "react";
import { InputRef } from '../../../Types/types';
import { useFirestorage } from '../../../hooks/useFirestorage';
import {PricePropertiesToSendType} from '../../../Types/types';
import { useFirestoreDatabase } from '../../../hooks/useFirestoreDatabase';

type AddAdminType = {toggle:()=>void, update:(updateCounter:number)=>void, updateCounter:number}
export const AddPrice:React.FC<AddAdminType> = (props): JSX.Element=>{
    const [pictureFiles,setPictureFiles] = useState<string[]>([]);
    const [isPropertiesReady, setIsPropertiesReady ] = useState<boolean>(false)
    const [propertiesToSend, setPropertiesToSend ] = useState<PricePropertiesToSendType>({})
    const [databaseLocation] = useState<string>("Price")
    let namesRef = useRef() as MutableRefObject<HTMLInputElement>
    let priceRef = useRef() as MutableRefObject<HTMLInputElement>
    let descriptionRef = useRef() as MutableRefObject<HTMLInputElement>
    let contentRef = useRef() as MutableRefObject<HTMLInputElement>
    let file1Ref = useRef() as MutableRefObject<HTMLInputElement>
    let file2Ref = useRef() as MutableRefObject<HTMLInputElement>
    const fileUploadHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
        if(e.target.files != null){
            let file = e.target?.files[0].name
            setPictureFiles((prevState)=>[...prevState, file])
        }
    }
    const fileUploadHandler2 = (e:React.ChangeEvent<HTMLInputElement>) => {
        if(e.target.files != null){
            const file =  e.target?.files[0].name
            setPictureFiles((prevState) => [...prevState, file])
        }
    }
    // Uploadowanie zdjęcia
    const {pictureURL, succesPictureUpload} = useFirestorage(pictureFiles);
    const addNewHandler = async (e:React.SyntheticEvent) => {
        e.preventDefault();
        const enteredNamesRef: InputRef = namesRef.current.value.trim();
        const enteredPriceRef: InputRef = namesRef.current.value.trim();
        const enteredDescriptionRef: InputRef = descriptionRef.current.value.trim()
        const enteredContentRef: InputRef = namesRef.current.value.trim();
        setIsPropertiesReady(true);
        setPropertiesToSend({
            name: enteredNamesRef,
            price: enteredPriceRef,
            description: enteredDescriptionRef,
            content: enteredContentRef,
            url1: pictureURL[0],
            url2: pictureURL[1],
            date: new Date().getTime()
        })
        descriptionRef.current.value = '';
        priceRef.current.value = '';
        namesRef.current.value = '';
        contentRef.current.value = '';
        file1Ref.current.value = '';
        file2Ref.current.value = '';
        props.update(props.updateCounter + 1);
    }
    const {succesfullUpload, error} = useFirestoreDatabase(databaseLocation,propertiesToSend, isPropertiesReady);
    console.log(succesfullUpload)
    {succesfullUpload && props.toggle()}
    return(
        <div className={classes.modal__add}>
              {succesfullUpload &&  <p className={classes.admin__success}>Udało się dodać nową opinię ! </p>}
            {error && <p className={classes.admin__success}>Niestety wystąpił błąd ! </p>}
            <button onClick={props.toggle} className={classes.modal__closure}></button>
            <form className={classes.admin__wrapper} onSubmit={addNewHandler}>
                <label className={classes.admin__label} htmlFor='names'>Nazwa Pakietu</label>
                <input className={classes.admin__input} ref={namesRef} type="text" id="names"  required/>
                <label className={classes.admin__label} htmlFor='description'>Opis</label>
                <input className={classes.admin__input} ref={descriptionRef} type="text" id="description"  required/>
                <label className={classes.admin__label} htmlFor='price'>Cena</label>
                <input className={classes.admin__input} ref={priceRef} type="text" id="price" required/>
                <label className={classes.admin__label} htmlFor='content'>Z czego się składa pakiet:</label>
                <input className={classes.admin__input} ref={contentRef} type="text" id="content" required/>
                <label className={classes.admin__label} htmlFor='file1'>Załącz zdjęcie nr 1</label>
                <input className={classes.admin__input} onChange={fileUploadHandler} ref={file1Ref} style={{border:'none'}} type="file" id="file1" accept='image/png, image/jpeg' required/>
                <label className={classes.admin__label} htmlFor='file2'>Załącz zdjęcie nr 2</label>
                <input className={classes.admin__input} onChange={fileUploadHandler2} ref={file2Ref} style={{border:'none'}} type="file" id="file2" accept='image/png, image/jpeg' required/>
                {succesPictureUpload && <p className={classes.admin__success}> Wszystko gotowe do dodania !</p>}
                <button className={classes.admin__button} type="submit">Dodaj</button>
            </form>
        </div>
    )
}