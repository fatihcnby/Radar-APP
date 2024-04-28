import axios from "axios";
import { useEffect, useState } from "react";
import { dOptions } from "../constants";
import formatDate from "../utils/formatDate";
import { setPath } from "../redux/slices/flightSlice";
import { useDispatch } from "react-redux";
import c from "../utils/checkValid";

const Modal = ({ detailId, close }) => {
  const dispatch = useDispatch();
  const [d, setDetail] = useState(null);

  useEffect(() => {
    setDetail(null);
    axios
      .get(
        `https://flight-radar1.p.rapidapi.com/flights/detail?flight=${detailId}`,
        dOptions
      )
      .then((res) => {
        setDetail(res.data);
        dispatch(setPath(res.data.trail));
      });
  }, [detailId]);

  return (
    <div className="detail-outer">
      <div className="detail-inner">
        <div className="close-wrapper">
          <button onClick={close}>X</button>
        </div>
        {!d ? (
          <div className="loader-wrapper">
            <div className="loader">
              <span></span>
            </div>
          </div>
        ) : (
          <>
            <h2>{c(d.aircraft.model.text)}</h2>
            <h2>{c(d.aircraft.model.code)}</h2>
            <p>
              <span>Kuyruk Kodu : </span>
              <span> {c(d.aircraft.registration)}</span>
            </p>

            {d.aircraft.images ? (
              <img
                src={
                  d.aircraft.images?.large
                    ? d.aircraft.images.large[0].src
                    : d.aircraft.images.thumbnails[0].src
                }
              />
            ) : (
              <p>Fotoğraf Bulunamadı</p>
            )}
            <p>
              <span>Firma İsmi : </span>
              <span>{c(d.airline?.short)}</span>
            </p>
            <p>
              <span>Kalkış N. : </span>
              <a target="_blank" href={d.airport?.origin?.website}>
                {c(d.airport.origin?.name)}
              </a>
            </p>
            <p>
              <span>Varış N. : </span>
              <a target="_blank" href={d.airport?.destination?.website}>
                {c(d.airport?.destination?.name)}
              </a>
            </p>
            <p>
              <span>Kalkış Saati : </span>
              <span>
                {d.time.scheduled.departure > 0
                  ? formatDate(d.time.scheduled.departure)
                  : "Bilinmiyor"}
              </span>
            </p>
            <p>
              <span>İniş Saati : </span>
              <span>
                {d.time.scheduled.arrival > 0
                  ? formatDate(d.time.scheduled.arrival)
                  : "Bilinmiyor"}
              </span>
            </p>
            <p className={d.status.icon}>
              <span>{c(d.status.text)}</span>
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default Modal;
