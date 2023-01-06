import FakeAppointmentsRepository from '@modules/appointments/repositories/fakes/FakeAppointmentsRepository';
import CreateAppoitmentService from '@modules/appointments/services/CreateAppoitmentService';
import AppError from '@shared/errors/AppError';

describe('CreateAppointment', () => {
    it('should be able to create a new appointment', async () => {
        const fakeAppointmentsRepository = new FakeAppointmentsRepository();
        const createAppointment = new CreateAppoitmentService(
            fakeAppointmentsRepository
        );

        const appointment = await createAppointment.execute({
            provider_id: '123123123',
            date: new Date(),
        });

        expect(appointment).toHaveProperty('id');
        expect(appointment.provider_id).toBe('123123123');
    });

    it('should not be able to create two appointments on the same time', async () => {
        const fakeAppointmentsRepository = new FakeAppointmentsRepository();
        const createAppointment = new CreateAppoitmentService(
            fakeAppointmentsRepository
        );

        const appointmentDate = new Date(2020, 4, 10, 11);

        const appointment = await createAppointment.execute({
            provider_id: '123123123',
            date: appointmentDate,
        });

        expect(
            createAppointment.execute({
                provider_id: '123123123',
                date: appointmentDate,
            })
        ).rejects.toBeInstanceOf(AppError);
    });
});
