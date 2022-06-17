/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { db, collection, getDoc, getDocs, doc } from '../Firebase';
import {
  WORK_COLLECTION,
  INFO_COLLECTION,
  LANDING_COLLECTION,
  INDEX_COLLECTION,
  ABOUT_DOC,
  PRESS_DOC,
  RESUME_DOC,
  SELECTED_CLIENT_DOC
} from '../global/DATABASE';

const GlobalContext = React.createContext(null);
function GlobalProvider({ location, children }) {
  const [loading, setLoading] = useState(true);
  const [workItems, setWorkItems] = useState({});
  const [aboutData, setAboutData] = useState({});
  const [resumeData, setResumeData] = useState({});
  const [pressData, setPressData] = useState({});
  const [selectedClients, setSelectedClientsData] = useState({});
  const [landingData, setLandingData] = useState({});
  const [indexData, setIndexData] = useState({});

  useEffect(() => {
    (async () => {
      if (db) {
        await getLandingData();
        await getInfo();
        await getIndexData();
      }
    })();
  }, [db]);

  const getInfo = async () => {
    const infoCollection = collection(db, INFO_COLLECTION);
    const infoSnap = await getDocs(infoCollection);
    infoSnap.forEach((doc) => {
      const data = doc.data();
      switch (doc.id) {
        case ABOUT_DOC:
          setAboutData(data);
          break;
        case PRESS_DOC:
          setPressData(data);
          break;
        case RESUME_DOC:
          setResumeData(data);
          break;
        case SELECTED_CLIENT_DOC:
          setSelectedClientsData(data);
          break;
        default:
          break;
      }
    });
  };

  const getWorkItems = async () => {
    let worklist = {};
    const workCollection = collection(db, WORK_COLLECTION);
    const workSnap = await getDocs(workCollection);
    workSnap.forEach((doc) => {
      worklist[doc.id] = doc.data();
    });
    setWorkItems(worklist);
  };

  const getWorkItem = async (id) => {
    const workDoc = doc(db, WORK_COLLECTION, id);
    const workSnap = await getDoc(workDoc);
    const work = workSnap.data();
    return work;
  };

  const getLandingData = async () => {
    const landingData = {};
    const landingCollection = collection(db, LANDING_COLLECTION);
    const landingSnap = await getDocs(landingCollection);
    landingSnap.forEach((doc) => {
      landingData[doc.id] = doc.data();
    });
    setLandingData(landingData);
  };

  const getIndexData = async () => {
    let indexData = {};
    const indexCollection = collection(db, INDEX_COLLECTION);
    const indexSnap = await getDocs(indexCollection);
    indexSnap.forEach((doc) => {
      indexData[doc.id] = doc.data();
    });
    setIndexData(indexData);
  };

  return (
    <GlobalContext.Provider
      value={{
        getIndexData,
        getInfo,
        getWorkItems,
        getWorkItem,
        getLandingData,
        indexData,
        aboutData,
        resumeData,
        pressData,
        selectedClients,
        landingData,
        workItems,
        db
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export { GlobalContext, GlobalProvider };
