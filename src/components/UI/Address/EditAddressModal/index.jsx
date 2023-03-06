import cls from "./EditAddressModal.module.scss";
import { Dialog, Slide } from "@mui/material";
import { useEffect, useRef, useState, forwardRef } from "react";
import useTranslation from "next-translate/useTranslation";
import { useForm } from "react-hook-form";

import SecondaryButton from "components/UI/Buttons/SecondaryButton";
import MainButton from "components/UI/Buttons/MainButton";
import { CloseIcon, AddressSearchIcon } from "components/UI/Icons";
import YandexMap from "components/UI/YandexMap";
import { rem } from "utils/pxToRem";
import { useGetUser } from "hooks/useGetUser";
import { useDispatch } from "react-redux";
import { useStyles } from "../styles";
import { useWindowWidth } from "hooks/useWindowWidth";
import { searchAddress } from "utils/yandexMapUtils";
import useDebounce from "hooks/useDebounce";
import useOnClickOutside from "hooks/useOnClickOutside";
import useGeolocation from "hooks/useGeolocation";
import Input from "components/UI/Forms/Input";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} timeout={560} {...props} />;
});

export default function EditAddressModal({
  addNewAddress,
  setAddNewAddress,
  initialValue,
  refetch,
}) {
  const {
    handleSubmit,
    register,
    setValue,
    getValues,
    formState: { errors },
    setError,
  } = useForm();
  const [mapInfo, setMapInfo] = useState("");
  const [isClear, setIsClear] = useState(false);
  const [addresses, setAddresses] = useState([]);
  const [open, setOpen] = useState(false);
  const [isConfirm, setIsConfirm] = useState(false);
  const ref = useRef();
  const user = useGetUser();
  const debouncedSearchTerm = useDebounce(mapInfo, 500);
  const classes = useStyles();
  const [location, setLocation] = useState({
    lat: 41.311144,
    long: 69.279728,
    zoom: 15,
  });
  const dispatch = useDispatch();
  const windowWidth = useWindowWidth();
  const { t } = useTranslation("common");
  const geoLocation = useGeolocation();

  useOnClickOutside(ref, () => setOpen(false));

  useEffect(() => {
    setLocation((prev) => ({
      ...prev,
      ...geoLocation,
    }));
  }, [geoLocation]);

  useEffect(async () => {
    if (debouncedSearchTerm) {
      const results = await searchAddress({ geocode: debouncedSearchTerm });
      if (results) {
        setAddresses(results);
      }
    } else {
      setAddresses([]);
    }
  }, [debouncedSearchTerm]);

  useEffect(() => {
    if (initialValue && initialValue.id) {
      setMapInfo(initialValue.address);
      setValue("floor", initialValue.floor);
      setValue("apartment", initialValue.apartment);
      setValue("building", initialValue.building);
      setValue("name", initialValue.name);
      setLocation((prev) => ({
        ...prev,
        lat: initialValue.location.lat,
        long: initialValue.location.long,
      }));
    }
  }, [initialValue]);

  const onSubmit = (data) => {
    console.log("data", data);
  };

  const searchConfirm = (item) => {
    window.ymaps.geocode(item?.GeoObject?.name).then(function (res) {
      var firstGeoObject = res.geoObjects.get(0);
      setIsConfirm(true);
      setIsClear(false);
      setMapInfo(firstGeoObject.properties._data.name);
      setLocation((prev) => ({
        ...prev,
        lat: firstGeoObject.geometry._coordinates[0],
        long: firstGeoObject.geometry._coordinates[1],
        zoom: 18,
      }));
      setOpen(false);
    });
  };

  return (
    <Dialog
      className={classes.root}
      open={addNewAddress}
      onClose={() => {
        setAddNewAddress(false);
      }}
      TransitionComponent={Transition}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <div className={`${cls.addressForm} scrollBar`}>
        <div className={cls.dialogNewAddress}>
          <div className={cls.close} onClick={() => setAddNewAddress(false)}>
            <CloseIcon />
          </div>
          <p>Изменить адрес</p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className={cls.form}>
              <div className={cls.searchForm} ref={ref}>
                <Input
                  placeholder={"Название улицы"}
                  startAdornment={<AddressSearchIcon />}
                  className={cls.search}
                  onChange={(e) => {
                    setMapInfo(e.target.value);
                    setOpen(true);
                  }}
                  name="address"
                  disabled={isConfirm}
                  clearFn={() => {
                    setIsClear(true);
                    setIsConfirm(false);
                    setMapInfo("");
                  }}
                  value={mapInfo}
                  required
                  isClear={isConfirm}
                />

                {open && addresses && addresses.length > 0 && (
                  <div className={`${cls.addressListPopover} scrollBar`}>
                    {addresses.map((item, index) => (
                      <div
                        key={index + "address"}
                        className={cls.addressItem}
                        onClick={() => searchConfirm(item)}
                      >
                        <div className={cls.addressText}>
                          <p>{item?.GeoObject?.name}</p>
                          <p>{item?.GeoObject?.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className={cls.addressName}>
                <Input
                  placeholder={"Название адреса"}
                  register={register}
                  errors={errors}
                  name="name"
                />
              </div>
              <div className={cls.addressOptions}>
                <Input
                  placeholder={"Кв/офис"}
                  register={register}
                  name="apartment"
                />
                <Input
                  placeholder={"Подъезд"}
                  register={register}
                  name="building"
                />
                <Input placeholder={"Этаж"} register={register} name="floor" />
              </div>
              <div className={cls.map}>
                {addNewAddress && (
                  <YandexMap
                    setLocation={setLocation}
                    location={location}
                    height={windowWidth > 768 ? rem(250) : rem(210)}
                    setMapInfo={setMapInfo}
                    mapInfo={mapInfo}
                    setIsConfirm={setIsConfirm}
                    isConfirm={isConfirm}
                    setIsClear={setIsClear}
                    isClear={isClear}
                  />
                )}
              </div>
              <div className={cls.buttons}>
                <SecondaryButton
                  fullWidth
                  size="small"
                  onClick={() => setAddNewAddress(false)}
                >
                  Отменить
                </SecondaryButton>
                <MainButton
                  loading={false}
                  fullWidth
                  type="submit"
                  onClick={() => setAddNewAddress(false)}
                  //   disabled={!isConfirm}
                >
                  Сохранить
                </MainButton>
              </div>
            </div>
          </form>
        </div>
      </div>
    </Dialog>
  );
}
