import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { isToday, format, parseISO, isAfter } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import DayPicker, { DayModifiers } from 'react-day-picker';
import 'react-day-picker/lib/style.css';

import {Container, Header, HeaderContent, Profile, Content, Schedule, Calendar, NextAppointment, Section, Appointment} from './styles';

import logoImg from '../../assets/logo.svg';
import { FiClock, FiPower } from 'react-icons/fi';
import { useAuth } from '../../hooks/auth';
import api from '../../services/apiClient';
import { Link } from 'react-router-dom';

interface IMonthAvailabilityItem{
    day: number;
    available: boolean;
}

interface IAppointment{
    id: string;
    date: string;
    hourFormatted: string;
    user: {
        name: string;
        avatar_url: string;
    }
}

const Dashboard: React.FC = () => {

    const [selectedDate, setSelectedDate] = useState(new Date());
    const [currentMonth, setCurrentMonth] = useState(new Date());
    const [monthAvailability, setMonthAvailability] = useState<IMonthAvailabilityItem[]>([]);
    const [appointments, setAppointments] = useState<IAppointment[]>([]);
    
    const handleDateChange = useCallback((day: Date, modifiers: DayModifiers) => {
        if(modifiers.available && !modifiers.disabled){
            setSelectedDate(day);
        }
    }, []);
    

    const handleMonthChange= useCallback((month: Date) => {
        setCurrentMonth(month);
        console.log(currentMonth);
    }, [currentMonth]);

    const { signOut, user } = useAuth();
    useEffect(() => {
        /*api.get(`/provider/${user.id}/month-availability`, {
            params: {
                year: currentMonth.getFullYear(),
                month: currentMonth.getMonth() + 1,
            }
        }).then(response => {
            setMonthAvailability(response.data);
        });*/

    // TODO: Tirar dados fixos e colocar a chamada da API
        const response = {
            data: [{
                day: 2,
                available: false,
            },
            {
                day: 3,
                available: false,
            },
            {
                day: 9,
                available: false,
            },
            {
                day: 18,
                available: false,
            }
        ]};
        setMonthAvailability(response.data);
    }, [currentMonth, user.id]);

    const disableDays = useMemo(() => {
        const dates = monthAvailability.filter(monthDay => monthDay.available === false).map(monthDay => {
            const year = currentMonth.getFullYear();
            const month = currentMonth.getMonth();
            return new Date(year, month, monthDay.day);
        });

        return dates;

    }, [currentMonth, monthAvailability]);

    const selectedDateAsText = useMemo(() => {
        return format(selectedDate, "'Dia' dd 'de' MMMM", {
            locale: ptBR
        })
    }, [selectedDate]);

    const selectedWeekDay = useMemo(() => {
        return format(selectedDate, 'cccc', {
            locale: ptBR
        });
    }, [selectedDate]);

    useEffect(()=>{
        /*api.get<IAppointment[]>('/appoitments/me', {
            params:{
                year: selectedDate.getUTCFullYear(),
                month: selectedDate.getMonth() + 1,
                day: selectedDate.getDate,
            }
        }).then(response => {
            const appointmentFormatted = response.data.map(appointment => {
                return {
                    ...appointment,
                    hourFormatted: format(parseISO(appointment.date), 'HH:mm'),
                }
            })
            setAppointments(appointmentFormatted);
        })*/

        // TODO: Valores Fixos

        let appointmentsData = [{
            id: '1234',
            date: '2020-11-27 15:00',
            hourFormatted: '15:00',
            user: {
                name: 'Adriany Aires',
                avatar_url: 'https://avatars2.githubusercontent.com/u/23082247?s=460&u=735577d38c1eb13e5f0528df0c26c11ad0e86cab&v=4',
            }
        },
        {
            id: '43211',
            date: '2020-11-27 18:00',
            hourFormatted: '18:00',
            user: {
                name: 'Maria dos Santos',
                avatar_url: 'https://www.refinery29.com/images/9117820.jpg',
            }, 
        },
        {
            id: '43211',
            date: '2020-11-27 09:00',
            hourFormatted: '09:00',
            user: {
                name: 'Emmanuel Gomes',
                avatar_url: 'https://sa1s3optim.patientpop.com/assets/images/provider/photos/1888657.jpg',
            }, 
        },
        {
            id: '43211',
            date: '2020-11-26 15:00',
            hourFormatted: '15:00',
            user: {
                name: 'Emmanuel Gomes',
                avatar_url: 'https://sa1s3optim.patientpop.com/assets/images/provider/photos/1888657.jpg',
            }, 
        },
        {
            id: '43211',
            date: '2020-11-30 09:00',
            hourFormatted: '09:00',
            user: {
                name: 'Emmanuel Gomes',
                avatar_url: 'https://sa1s3optim.patientpop.com/assets/images/provider/photos/1888657.jpg',
            }, 
        }
    ];
    appointmentsData = appointmentsData.filter(appointment => parseISO(appointment.date).getDate() === selectedDate.getDate());

        setAppointments(appointmentsData);
    }, [selectedDate])

    const morningAppointments = useMemo(() => {
        return appointments.filter(appointment => {
            return parseISO(appointment.date).getHours() < 12;
        })
    }, [appointments]);

    const afternoonAppointments = useMemo(() => {
        return appointments.filter(appointment => {
            return parseISO(appointment.date).getHours() >= 12;
        });
    }, [appointments]);
    
    const nextAppointment = useMemo(() => {
        return appointments.find(appointment => {
            return isAfter(parseISO(appointment.date), new Date());
        })
    },[appointments]);
    
    return (<Container>
        <Header>
            <HeaderContent>
                <img src={logoImg} alt="goBarber" />
                <Profile>
                    <img src={user.avatar_url} alt={user.name} />
                    <div>
                        <span>Bem-vindo,</span>
                        <Link to="/profile"><strong>{user.name}</strong></Link>
                    </div>
                </Profile>
                <button type="button" onClick={signOut}>
                    <FiPower/>
                </button>
            </HeaderContent>
        </Header>
        <Content>
            <Schedule>
                <h1>Hor??rios Agendados</h1>
                <p>
                    {isToday(selectedDate) && <span> Hoje</span> }
                    <span>{selectedDateAsText}</span>
                    <span> {selectedWeekDay} </span>
                </p>
                {isToday(selectedDate) && nextAppointment && (
                    <NextAppointment>
                        <strong>Agendamento a Seguir</strong>
                        <div>
                            <img src={nextAppointment.user.avatar_url} alt={nextAppointment.user.name} />
                            <strong>{nextAppointment.user.name}</strong>
                            <span>
                                <FiClock />
                                08:00
                            </span>
                        </div>
                    </NextAppointment>
                )}
                <Section>
                    <strong>Manh??</strong>
                    {morningAppointments.length === 0 && (
                        <p>Nenhum agendamento realizado para esse per??odo</p>
                    )}
                    {morningAppointments.map(appointment => (
                        <Appointment key={appointment.id}>
                            <span>
                                <FiClock />
                                {appointment.hourFormatted}
                            </span>
                            <div>
                                <img src={appointment.user.avatar_url}  alt={appointment.user.name}/>
                                <strong>{appointment.user.name}</strong>
                            </div>
                        </Appointment>
                    ))}
                    
                </Section>
                <Section>
                    <strong>Tarde</strong>
                    {afternoonAppointments.length === 0 && (
                        <p>Nenhum agendamento realizado para esse per??odo</p>
                    )}
                    {afternoonAppointments.map(appointment => (
                        <Appointment key={appointment.id}>
                            <span>
                                <FiClock />
                                {appointment.hourFormatted}
                            </span>
                            <div>
                                <img src={appointment.user.avatar_url}  alt={appointment.user.name}/>
                                <strong>{appointment.user.name}</strong>
                            </div>
                        </Appointment>
                    ))}
                </Section>
            </Schedule>
            <Calendar>
                <DayPicker weekdaysShort={['D', 'S', 'T', 'Q', 'Q', 'S', 'S']} 
                fromMonth={new Date()}
                disabledDays={[
                    {daysOfWeek: [0, 6]},
                    ...disableDays
                ]}
                onMonthChange={handleMonthChange}
                modifiers={{
                    available: { daysOfWeek: [1,2,3,4,5] }
                }}
                selectedDays={selectedDate}
                onDayClick={handleDateChange}
                />
            </Calendar>
        </Content>
    </Container>
)
};

export default Dashboard;