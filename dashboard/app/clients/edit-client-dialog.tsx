import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { DialogState } from '@/components/dialogs/dialog-state';
import { Client } from './client-type';
import { create } from 'zustand';

export const useCustomerDialogState = create<DialogState<Client>>((set) => ({
  isOpen: false,
  toggleModal: () =>
    set((state: DialogState<Client>) => ({ isOpen: !state.isOpen })),
  data: null,
  setData: (data: Client) => set(() => ({ data: data })),
}));

export default function EditCustomerDialog(
  props: Pick<DialogState<Client>, 'isOpen' | 'data' | 'toggleModal'>
) {
  return (
    <Dialog open={props.isOpen} onOpenChange={props.toggleModal}>
      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle>
            {props.data == null ? 'Create' : 'Edit'} profile
          </DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when
          </DialogDescription>
        </DialogHeader>
        <div className='grid gap-4 py-4'>
          <div className='grid grid-cols-4 items-center gap-4'>
            <Label htmlFor='name' className='text-right'>
              Name
            </Label>
            <Input
              id='name'
              defaultValue={props.data?.name}
              className='col-span-3'
            />
          </div>
        </div>
        <DialogFooter>
          <Button type='submit' onClick={() => props.toggleModal()}>
            Save changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
